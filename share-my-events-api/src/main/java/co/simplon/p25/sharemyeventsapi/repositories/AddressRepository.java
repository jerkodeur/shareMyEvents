package co.simplon.p25.sharemyeventsapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.p25.sharemyeventsapi.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
