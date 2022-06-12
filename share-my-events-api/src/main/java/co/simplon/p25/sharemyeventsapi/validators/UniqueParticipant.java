package co.simplon.p25.sharemyeventsapi.validators;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Constraint(validatedBy = UniqueParticipantValidator.class)
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface UniqueParticipant {
	String message() default "Participant already exist on this event";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};
}
