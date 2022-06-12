package co.simplon.p25.sharemyeventsapi.dtos.event;

public final class EventCreatedId {
	private Long id;

	public EventCreatedId(Long id) {
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "EventCreatedId [id=" + id + "]";
	}

}
