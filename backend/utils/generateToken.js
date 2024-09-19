import jwt from 'jsonwebtoken';
const createToken = (payload) => {
	return jwt.sign(payload, 'jashu@123', { expiresIn: '5m' });
};
// const token1 =
// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFzaHUiLCJpYXQiOjE3MjY3MzQ2MTUsImV4cCI6MTcyNjczNDkxNX0.hpGscrYtVluPGv20_AsgMixg4AcDV2UonVEeBuKXX8M';
const verifyToken = (token) => {
	try {
		const data = jwt.verify(token, 'jashu@123');
		return data;
	} catch (err) {
		//err.name
	}
};

export { createToken, verifyToken };
