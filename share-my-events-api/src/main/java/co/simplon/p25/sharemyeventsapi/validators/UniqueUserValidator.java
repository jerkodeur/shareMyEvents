package co.simplon.p25.sharemyeventsapi.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import co.simplon.p25.sharemyeventsapi.repositories.ActorRepository;

public class UniqueUserValidator
		implements
			ConstraintValidator<UniqueUserConstraint, String> {

	private final ActorRepository actorRepo;

	public UniqueUserValidator(ActorRepository actorRepo) {
		this.actorRepo = actorRepo;
	}

	@Override
	public boolean isValid(String email, ConstraintValidatorContext context) {
		return email != null && !actorRepo.findByEmail(email).isPresent();
	}

}
