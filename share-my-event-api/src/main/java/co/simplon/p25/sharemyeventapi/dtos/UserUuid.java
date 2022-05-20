package co.simplon.p25.sharemyeventapi.dtos;

import java.util.UUID;

public class UserUuid {

	private UUID uuid;

	public UserUuid() {
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
