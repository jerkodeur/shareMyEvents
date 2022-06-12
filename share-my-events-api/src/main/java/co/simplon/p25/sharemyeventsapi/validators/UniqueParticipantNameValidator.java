package co.simplon.p25.sharemyeventsapi.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import co.simplon.p25.sharemyeventsapi.dtos.ParticipantCreateDto;
import co.simplon.p25.sharemyeventsapi.repositories.ParticipationRepository;

public class UniqueParticipantNameValidator
		implements
			ConstraintValidator<UniqueParticipantName, ParticipantCreateDto> {

	private final ParticipationRepository participationRepo;

	public UniqueParticipantNameValidator(
			ParticipationRepository participantRepo) {
		participationRepo = participantRepo;
	}

	@Override
	public void initialize(UniqueParticipantName constraintAnnotation) {
		// initialize
	}

	@Override
	public boolean isValid(ParticipantCreateDto participation,
			ConstraintValidatorContext context) {
		return !participationRepo
				.existsByNameAndEventId(participation.getName(),
						participation.getEventId())
				.isPresent();
	}
}
