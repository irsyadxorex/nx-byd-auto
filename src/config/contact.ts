/**
 * Contact Configuration
 * Centralized configuration for all contact information
 * Update these values to change contact details across the entire application
 */

export const contactConfig = {
  // Dealer Information
  dealer: {
    name: "BYD Dealer Indonesia",
    tagline: "Official BYD Electric Vehicle Dealer",
  },

  // Contact Person
  contactPerson: {
    name: "Badru",
    role: "Sales Consultant",
  },

  // Email
  email: "bydindonesia01@gmail.com",

  // Phone Numbers
  phone: {
    display: "+62 856-8636-146",
    whatsapp: "628568636146", // Format: country code + number (no + or -)
  },

  // Address
  address: {
    street: "Jl. Bang Pitung No.396, Sukabumi Utara, Kec. Kb. Jeruk",
    city: "Kota Jakarta Barat",
    province: "DKI Jakarta",
    postalCode: "11540",
    fullAddress: "Jl. Bang Pitung No.396, Sukabumi Utara, Kec. Kb. Jeruk, Kota Jakarta Barat, DKI Jakarta 11540",
  },

  // Social Media
  social: {
    instagram: "https://www.instagram.com/badrubyd_jakarta",
    facebook: "https://www.facebook.com/profile.php?id=61575336744682",
  },

  // Business Hours
  businessHours: {
    weekdays: "08:00 - 17:00 WIB",
    weekend: "09:00 - 15:00 WIB",
  },

  // WhatsApp Message Templates
  whatsappMessages: {
    general: "Halo, saya tertarik dengan BYD. Bisakah saya mendapatkan informasi lebih lanjut?",

    // Template function for product inquiry
    productInquiry: (productName: string, variantName?: string) => {
      const variant = variantName ? ` varian ${variantName}` : "";
      return `Halo, saya tertarik dengan ${productName}${variant}. Bisakah saya mendapatkan informasi lebih lanjut?`;
    },

    // Template function for test drive
    testDrive: (name: string, phone: string, model: string, date: string) => {
      return `Halo, saya ingin melakukan test drive:\n\nNama: ${name}\nNo. HP: ${phone}\nModel: ${model}\nTanggal: ${date}\n\nMohon konfirmasinya. Terima kasih!`;
    },

    // Template function for price inquiry
    priceInquiry: (productName: string) => {
      return `Halo, saya ingin mengetahui harga dan promo terbaru untuk ${productName}. Terima kasih!`;
    },
  },
};

/**
 * Helper function to generate WhatsApp URL
 */
export function getWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${contactConfig.phone.whatsapp}?text=${encodedMessage}`;
}

/**
 * Helper function to format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  return contactConfig.phone.display;
}
