
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Unique ID for each user
    username VARCHAR(50) NOT NULL UNIQUE, -- Unique username for login
    email VARCHAR(100) NOT NULL UNIQUE, -- Unique email for communication
    password VARCHAR(255) NOT NULL, -- Encrypted password
    dob DATE, -- User's date of birth
    gender ENUM('male', 'female'), -- Gender selection
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Update timestamp
);
