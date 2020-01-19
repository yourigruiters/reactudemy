import React, { Component } from "react";
import EventList from "../eventList/EventList";
import EventForm from "../eventForm/EventForm";
import { Grid, Button } from "semantic-ui-react";

const eventsFromDashboard = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventsFromDashboard,
    isOpen: false,
    selectedEvent: null
  };

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = Math.floor(Math.random() * 1000);
    newEvent.hostPhotoURL = "/assets/user.png";

    this.setState(({ events }) => ({
      events: [...events, newEvent],
      isOpen: false
    }));
  };

  handleUpdateEvent = updatedEvent => {
    this.setState(({ events }) => ({
      events: events.map(event => {
        if (updatedEvent.id === event.id) {
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    }));
  };

  handleDeleteEvent = id => {
    this.setState(({ events }) => ({
      events: events.filter(e => e.id !== id),
      isOpen: false,
      selectedEvent: null
    }));
  };

  handleSelectEvent = e => {
    this.setState({
      selectedEvent: e,
      isOpen: true
    });
  };

  render() {
    const { events, isOpen, selectedEvent } = this.state;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvent={this.handleSelectEvent}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            content="Create Event"
            onClick={this.handleCreateFormOpen}
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              cancelFormOpen={this.handleFormCancel}
              createEvent={this.handleCreateEvent}
              selectedEvent={selectedEvent}
              updateEvent={this.handleUpdateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
