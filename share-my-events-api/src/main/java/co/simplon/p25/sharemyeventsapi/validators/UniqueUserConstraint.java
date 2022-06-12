package co.simplon.p25.sharemyeventsapi.validators;

import static java.lang.annotation.ElementType.FIELD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Constraint(validatedBy = UniqueUserValidator.class)
@Retention(RUNTIME)
@Target(FIELD)
public @interface UniqueUserConstraint {
    String message() default "User email already used for this Client";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
