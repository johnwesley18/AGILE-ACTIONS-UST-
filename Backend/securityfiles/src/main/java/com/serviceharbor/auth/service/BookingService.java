package com.serviceharbor.auth.service;

import com.serviceharbor.auth.model.Booking;
import com.serviceharbor.auth.repository.BookingRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service

public class BookingService {
	
	@Autowired
    private  BookingRepository bookingRepository;
	

    // Fetch all bookings
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // Save a new booking and send confirmation email
    public Booking saveBooking(Booking booking, String userEmail, String serviceName, LocalDate slot, double amountPaid) {
        Booking savedBooking = bookingRepository.save(booking);

        // Format the booking time
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedTime = booking.getBookingTime().format(formatter);

        return savedBooking;
    }

    // Fetch a booking by ID
    public Optional<Booking> getBookingById(Long id) {
        return bookingRepository.findById(id);
    }

    // Update an existing booking
    public Optional<Booking> updateBooking(Long id, Booking updatedBooking) {
        return bookingRepository.findById(id).map(existingBooking -> {
            existingBooking.setUserId(updatedBooking.getUserId());
            existingBooking.setServiceProviderId(updatedBooking.getServiceProviderId());
            existingBooking.setBookingTime(updatedBooking.getBookingTime());
            return bookingRepository.save(existingBooking);
        });
    }

    // Delete a booking by ID
    public boolean deleteBooking(Long id) {
        if (bookingRepository.existsById(id)) {
            bookingRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
