package co.simplon.p25.sharemyeventsapi.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.simplon.p25.sharemyeventsapi.entities.Availability;

@Repository
public interface AvailabilityRepository
		extends
			JpaRepository<Availability, Long> {

	Optional<Availability> findOneByLabel(String availability);

}
