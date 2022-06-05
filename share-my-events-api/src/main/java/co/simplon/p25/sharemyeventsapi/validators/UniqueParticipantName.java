package co.simplon.p25.sharemyeventsapi.validators;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Constraint(validatedBy = UniqueParticipantNameValidator.class)
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface UniqueParticipantName {

	String message() default "Participant name is already used in this event";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};

}
