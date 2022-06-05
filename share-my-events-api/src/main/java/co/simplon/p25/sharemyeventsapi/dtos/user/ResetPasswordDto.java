package co.simplon.p25.sharemyeventsapi.dtos.user;

import java.util.UUID;

public class ResetPasswordDto {

	private UUID userUuid;
	private String oldPassword;
	private String newPassword;

	public ResetPasswordDto() {
	}

	public UUID getUserUuid() {
		return userUuid;
	}

	public void setUserUuid(UUID uuid) {
		userUuid = uuid;
	}

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	@Override
	public String toString() {
		return "ResetPasswordDto [userUuid=" + userUuid + ", oldPassword="
				+ "[PROTECTED]" + ", newPassword=" + "[PROTECTED]" + "]";
	}

}
