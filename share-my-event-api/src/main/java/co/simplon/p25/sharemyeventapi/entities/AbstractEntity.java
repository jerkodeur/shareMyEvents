package co.simplon.p25.sharemyeventapi.entities;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractEntity {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

public AbstractEntity() {}

/**
 * Returns the database generated id (primary key mapped) for this entity.
 *
 * @return the entity identifier (primary key mapped)
 */
public Long getId() {
    return id;
}

@SuppressWarnings("unused")
private void setId(Long id) {
// private: assigned by database
    this.id = id;
}

}
