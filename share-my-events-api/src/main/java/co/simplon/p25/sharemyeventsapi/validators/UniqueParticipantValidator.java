package co.simplon.p25.sharemyeventsapi.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import co.simplon.p25.sharemyeventsapi.dtos.ParticipantCreateDto;
import co.simplon.p25.sharemyeventsapi.repositories.ActorRepository;
import co.simplon.p25.sharemyeventsapi.repositories.ParticipationRepository;

public class UniqueParticipantValidator
		implements
			ConstraintValidator<UniqueParticipant, ParticipantCreateDto> {

	private final ParticipationRepository participationRepo;
	private final ActorRepository actorRepo;

	public UniqueParticipantValidator(ParticipationRepository participantRepo,
			ActorRepository actorRepo) {
		participationRepo = participantRepo;
		this.actorRepo = actorRepo;
	}

	@Override
	public void initialize(UniqueParticipant constraintAnnotation) {
		// initialize
	}

	@Override
	public boolean isValid(ParticipantCreateDto participation,
			ConstraintValidatorContext context) {
		if (actorRepo.existsByEmail(participation.getEmail())) {
			Long participantId = actorRepo
					.findActorIdByEmail(participation.getEmail()).get();
			return !participationRepo.existsByParticipantIdAndEventId(
					participantId, participation.getEventId()).isPresent();
		}
		return true;
	}

}
