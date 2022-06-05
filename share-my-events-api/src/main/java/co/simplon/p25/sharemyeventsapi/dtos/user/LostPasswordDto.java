package co.simplon.p25.sharemyeventsapi.dtos.user;

import java.util.UUID;

public class LostPasswordDto {
	private UUID userUuid;
	private String mailHeader;
	private String mailFooter;

	public LostPasswordDto(UUID userUuid, String mailHeader,
			String mailFooter) {
		this.userUuid = userUuid;
		this.mailHeader = mailHeader;
		this.mailFooter = mailFooter;
	}

	public LostPasswordDto() {
	}

	public UUID getUserUuid() {
		return userUuid;
	}

	public void setUserUuid(UUID userUuid) {
		this.userUuid = userUuid;
	}

	public String getMailHeader() {
		return mailHeader;
	}

	public void setMailHeader(String mailHeader) {
		this.mailHeader = mailHeader;
	}

	public String getMailFooter() {
		return mailFooter;
	}

	public void setMailFooter(String mailFooter) {
		this.mailFooter = mailFooter;
	}

	@Override
	public String toString() {
		return "ResetPasswordDto [userUuid=" + userUuid + ", mailHeader="
				+ mailHeader + ", mailFooter=" + mailFooter + "]";
	}

}
