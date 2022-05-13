package co.simplon.p25.sharemyeventapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import co.simplon.p25.sharemyeventapi.entities.Address;

public interface AddressRepo extends JpaRepository<Address, Long> {

}
