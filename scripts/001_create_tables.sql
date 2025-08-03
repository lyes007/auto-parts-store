-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image_url VARCHAR(500),
  stock_quantity INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50),
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

-- Insert sample products
INSERT INTO products (name, description, price, category, image_url, stock_quantity) VALUES
('Premium Brake Pads', 'High-performance ceramic brake pads for superior stopping power', 89.99, 'Brakes', '/placeholder.svg?height=300&width=300', 50),
('Engine Oil Filter', 'Premium oil filter for optimal engine protection', 24.99, 'Engine', '/placeholder.svg?height=300&width=300', 100),
('LED Headlight Bulbs', 'Ultra-bright LED headlight bulbs with long lifespan', 149.99, 'Lighting', '/placeholder.svg?height=300&width=300', 75),
('Performance Air Filter', 'High-flow air filter for improved engine performance', 59.99, 'Engine', '/placeholder.svg?height=300&width=300', 30),
('Shock Absorbers', 'Premium shock absorbers for smooth ride quality', 199.99, 'Suspension', '/placeholder.svg?height=300&width=300', 25),
('Spark Plugs Set', 'Iridium spark plugs for enhanced ignition performance', 79.99, 'Engine', '/placeholder.svg?height=300&width=300', 60);
