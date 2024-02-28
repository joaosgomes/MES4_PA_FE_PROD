//EventList.js
import React, { useEffect, useState } from "react";
import {
  fetchEvents,
  removeEvent,
  getEventHTMLById,
} from "../../controllers/EventController";
import { CountdownComponent, HeaderTitle, ShareButton } from "../index";
import { Card, Col, Row, Image, Avatar, Skeleton, Empty, message } from "antd";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

import {
  DeleteFilled,
  EditFilled,
  EyeFilled,
  ThunderboltFilled,
} from "@ant-design/icons";

const { Meta } = Card;

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEventsData = async () => {
      try {
        setLoading(true);
        const eventData = await fetchEvents();
        setEvents(eventData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
        setEvents(null);
        message.error("Error fetching events");
      }
    };

    getEventsData();
  }, []);
  const handleDelete = async (eventId) => {
    await removeEvent(eventId);
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const handleDetail = async (eventId) => {
    console.log(eventId);
  };

  const handleImageError = (event) => {
    event.target.src = "../../logo.svg"; //
  };

  if (!events) {
    return (
      <Empty
        description="Events Not Found"
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
    );
  }

  return (
    <div>
      <HeaderTitle title="Events List" />

      <Row gutter={[16, 16]}>
        {loading ? (
          <React.Fragment>
            {[1, 2, 3, 4].map((item) => (
              <Col key={item} xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card style={{ width: "100%" }}>
                  <Skeleton loading={true} active />
                </Card>
              </Col>
            ))}
          </React.Fragment>
        ) : (
          events &&
          events.map((event) => (
            <Col key={event.id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                hoverable
                style={{ width: "100%" }}
                key={event.id}
                cover={
                  <Image
                    alt={event.name}
                    src={logo}
                    //onError={handleImageError}
                    style={{ width: "100%" }}
                    fallback={logo}
                    srcSet={event.src_image}
                    loading="lazy"
                  />
                }
                actions={[
                  <Link to={`/MES4_PA_FE_PROD/event/${event.id}`}>
                    <EyeFilled
                      onClick={() => handleDetail(event.id)}
                      key="Detail"
                    />
                  </Link>,

                  <DeleteFilled
                    onClick={() => handleDelete(event.id)}
                    key="Delete"
                  />,
                  <Link to={`/MES4_PA_FE_PROD/edit-event/${event.id}`}>
                    <EditFilled key="Edit" />
                  </Link>,
                  <ThunderboltFilled
                    target="_blank"
                    onClick={() => getEventHTMLById(event.id)}
                    key="View"
                  />,
                  <ShareButton eventData={event} />,
                ]}
              >
                <br />
                <Meta
                  avatar={<Avatar alt="Avatar" src={logo} />}
                  title={event.name}
                  description={event.id}
                />
                <br />
                <CountdownComponent
                  value={new Date(event.date)}
                  onFinish={() => console.log("Countdown finished")}
                />
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}

export default EventList;
