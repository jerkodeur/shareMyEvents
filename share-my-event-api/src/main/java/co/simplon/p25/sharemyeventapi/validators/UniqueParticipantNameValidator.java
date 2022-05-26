package co.simplon.p25.sharemyeventapi.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import co.simplon.p25.sharemyeventapi.repositories.ParticipationRepository;

public class UniqueParticipantNameValidator
		implements
			ConstraintValidator<UniqueParticipantName, String> {

	private final ParticipationRepository repo;

	public UniqueParticipantNameValidator(ParticipationRepository participantRepo) {
		repo = participantRepo;
	}

	@Override
	public boolean isValid(String name, ConstraintValidatorContext context) {
		return !repo.existsByName(name);
	}
}
