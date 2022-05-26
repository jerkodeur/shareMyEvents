package co.simplon.p25.sharemyeventapi.dtos;

import java.util.UUID;

public class UserUuidDto {

	private UUID uuid;

	public UserUuidDto() {
		// TODO Auto-generated constructor stub
	}

	public UUID getUuid() {
		return uuid;
	}

	public void setUuid(UUID uuid) {
		this.uuid = uuid;
	}

	@Override
	public String toString() {
		return "UserUuid [uuid=" + uuid + "]";
	}

}
