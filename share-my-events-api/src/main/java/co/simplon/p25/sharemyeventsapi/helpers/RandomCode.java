package co.simplon.p25.sharemyeventsapi.helpers;

import java.util.Random;

public final class RandomCode {

	private RandomCode() {
	}

	private static int generateSingleRandomInt() {
		double randomInt = Math.random() * 10;
		return (int) randomInt;
	}

	private static char generateSingleRandomChar() {
		Random r = new Random();
		return (char) (r.nextInt(26) + 'a');
	}

	private static char randomCase(char value) {
		double random = Math.random() * 2;
		if ((int) random == 0) {
			return Character.toUpperCase(value);
		} else {
			return value;
		}
	}

	private static String generateRandomCode(int length) {
		String code = "";

		for (int i = 1; i <= length; i++) {
			if (i % 2 == 0) {
				code += randomCase(generateSingleRandomChar());
			} else {
				code += generateSingleRandomInt();
			}
		}

		return code;
	}

	public static String getCode(int length) {

		return generateRandomCode(length);
	}

}
