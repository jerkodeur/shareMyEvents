package co.simplon.p25.sharemyeventapi.dtos;

public class UserGandalfId {

	private String gandalfId;

	public UserGandalfId() {
		// TODO Auto-generated constructor stub
	}

	public UserGandalfId(String gandalfId) {
		this.gandalfId = gandalfId;
	}

	public String getGandalfId() {
		return gandalfId;
	}

	@Override
	public String toString() {
		return "UserGandalfId [gandalfId=" + gandalfId + "]";
	}

}
