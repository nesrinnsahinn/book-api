import React, { useState } from 'react';

const Payment = () => {
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};

        if (!formData.cardNumber.match(/^\d{16}$/)) {
            errors.cardNumber = 'Geçersiz kart numarası. 16 haneli olmalıdır.';
        }

        if (!formData.expiryDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)) {
            errors.expiryDate = 'Geçersiz son kullanma tarihi. MM/YY formatında olmalıdır.';
        }

        if (!formData.cvv.match(/^\d{3}$/)) {
            errors.cvv = 'Geçersiz CVV. 3 haneli olmalıdır.';
        }
        if (formData.name.trim() === '') {
            errors.name = 'İsim soyisim alanı boş bırakılamaz.';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form is valid');
            // Proceed with form submission
        } else {
            console.log('Form is invalid');
        }
    };

    return (
        <div className="container mx-auto mt-24 md:mt-12 p-4 md:p-8 lg:p-12 text-white">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                        Kredi Kartı Numarası:
                    </label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.cardNumber && <p className="text-red-500 text-xs italic">{errors.cardNumber}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                        Son Kullanma Tarihi (MM/YY):
                    </label>
                    <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.expiryDate && <p className="text-red-500 text-xs italic">{errors.expiryDate}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                        CVV:
                    </label>
                    <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.cvv && <p className="text-red-500 text-xs italic">{errors.cvv}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                        İsim Soyisim:
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Ödeme Yap
                </button>
            </form>
        </div>
    );
};

export default Payment;
