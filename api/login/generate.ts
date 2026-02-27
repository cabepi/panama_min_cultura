import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { generateAndSendOTP } = await import('../../src/server/services/otpService.js');
        const { query } = await import('../../src/data/db.js');
        let body = req.body;
        if (typeof body === 'string') {
            try { body = JSON.parse(body); } catch (e) { }
        }
        const { email } = body || {};
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        // Verify that the user already exists and is verified
        const checkUser = await query('SELECT id FROM min_cultura.citizens WHERE email = $1 AND is_verified = true', [email]);
        if (checkUser.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario no registrado o no verificado.' });
        }

        // Generate and send OTP
        const otpId = await generateAndSendOTP(email);

        return res.status(200).json({
            message: 'OTP generated and sent successfully',
            otpId
        });
    } catch (error) {
        console.error('OTP Generation Error (Login):', error);
        return res.status(500).json({ error: 'Internal server error during OTP generation' });
    }
}
