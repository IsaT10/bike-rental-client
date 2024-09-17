# Bike Rental Booking System

## Overview

The Bike Rental Booking System is a comprehensive web application built with React and TypeScript, designed to facilitate bike rentals. This system integrates user authentication, bike management, booking processes, and advanced features like coupon functionality and bike comparison. It connects seamlessly with a backend API to manage data and ensure a smooth user experience.

## Features

- **Dynamic Coupon System**:
  - **Gamified Discounts**: Users can spin a wheel to win varying discount percentages (10%, 20%, or 30%). The coupon code is displayed in a modal, which can be copied and automatically applied to the rental.
- **Advanced Bike Comparison Tool**:

  - **Side-by-Side Comparison**: Allows users to compare multiple bikes by highlighting key features, helping them make informed decisions.

- **Profile Management**:

  - **User Profile**: Users can view and update their profile information, ensuring their details are always current.
  - **Admin Profile**: Admins have similar profile management capabilities with additional admin-specific features.

- **Comprehensive Rental Management**:

  - **Booking Process**: Users can book bikes through a streamlined form with an advanced payment of TK 100. Confirmation and bike availability updates are handled seamlessly.
  - **My Rentals Page**: Users can view their rentals with tabs for Paid and Unpaid rentals. Unpaid rentals include a "Pay" button for easy transaction completion.

- **Admin Bike and User Management**:

  - **Bike Management**: Admins can add, update, and delete bike listings with ease. A user-friendly interface simplifies managing bike details.
  - **User Management**: Admins can promote users to admin roles or delete user accounts as needed.

- **Return and Cost Calculation**:

  - **Return Process**: Admins can view rental details and calculate costs upon bike return. Successful returns update the rental status and notify the user.

- **Dark Mode**:
  - **Theme Switcher**: Users can toggle between light and dark modes for a customized viewing experience.

## Technologies

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: Redux Toolkit with RTK Query
- **Backend**: Node.js, Express.js, MongoDB, TypeScript
- **Payments**: Stripe
- **CSS Framework**: Tailwind CSS

## Setup

1. **Clone the repository**

```bash
  git clone https://github.com/IsaT10/bike-rental-client
```

2. **Install Dependencies**

```bash
  npm install
```

3. **Run the development server**

```bash
  npm run dev
```

**Live Link**
[GearPro](https://gearpro.netlify.app/ 'GearPro')
