const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// Validation middleware
const validateContact = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address')
        .normalizeEmail(),
    body('subject')
        .trim()
        .notEmpty().withMessage('Subject is required')
        .isLength({ min: 3, max: 200 }).withMessage('Subject must be between 3 and 200 characters'),
    body('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters')
];

// POST /api/contact - Submit contact form
router.post('/', validateContact, async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 'error',
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { name, email, subject, message } = req.body;

        // Create new contact entry
        const contact = new Contact({
            name,
            email,
            subject,
            message,
            ipAddress: req.ip || req.connection.remoteAddress,
            userAgent: req.get('user-agent')
        });

        // Save to database
        await contact.save();

        // Send success response
        res.status(201).json({
            status: 'success',
            message: 'Thank you for your message! I will get back to you soon.',
            data: {
                id: contact._id,
                name: contact.name,
                email: contact.email,
                createdAt: contact.createdAt
            }
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to submit contact form. Please try again later.'
        });
    }
});

// GET /api/contact - Get all contact messages (for admin)
router.get('/', async (req, res) => {
    try {
        const { status, limit = 50, page = 1 } = req.query;
        
        const query = status ? { status } : {};
        const skip = (page - 1) * limit;

        const contacts = await Contact.find(query)
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(skip)
            .select('-__v');

        const total = await Contact.countDocuments(query);

        res.status(200).json({
            status: 'success',
            data: {
                contacts,
                pagination: {
                    total,
                    page: parseInt(page),
                    limit: parseInt(limit),
                    pages: Math.ceil(total / limit)
                }
            }
        });

    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve contact messages'
        });
    }
});

// GET /api/contact/:id - Get single contact message
router.get('/:id', async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                status: 'error',
                message: 'Contact message not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: contact
        });

    } catch (error) {
        console.error('Get contact error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve contact message'
        });
    }
});

// PATCH /api/contact/:id - Update contact status
router.patch('/:id', async (req, res) => {
    try {
        const { status } = req.body;

        if (!['new', 'read', 'replied', 'archived'].includes(status)) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid status value'
            });
        }

        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status, updatedAt: Date.now() },
            { new: true }
        );

        if (!contact) {
            return res.status(404).json({
                status: 'error',
                message: 'Contact message not found'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Contact status updated successfully',
            data: contact
        });

    } catch (error) {
        console.error('Update contact error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to update contact message'
        });
    }
});

// DELETE /api/contact/:id - Delete contact message
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return res.status(404).json({
                status: 'error',
                message: 'Contact message not found'
            });
        }

        res.status(200).json({
            status: 'success',
            message: 'Contact message deleted successfully'
        });

    } catch (error) {
        console.error('Delete contact error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete contact message'
        });
    }
});

module.exports = router;
