const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

const createDefaultAdmin = async () => {
  try {
    const adminEmail = "vinayak@swamiglobaltrade.com";
    const adminPassword = "admin123";

    const existingAdmin = await Admin.findOne({ email: adminEmail });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      await Admin.create({
        email: adminEmail,
        password: hashedPassword,
      });

      console.log("✅ Default Admin Created");
    } else {
      console.log("✅ Admin Already Exists");
    }
  } catch (error) {
    console.log("Admin creation error:", error.message);
  }
};

module.exports = createDefaultAdmin;