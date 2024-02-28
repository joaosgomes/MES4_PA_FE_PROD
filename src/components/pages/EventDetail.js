//EventDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getEventById,
  getEventRemainTime,
} from "../../controllers/EventController";
import { GoBackButton, HeaderTitle } from "../index";
import logo from "../../logo.svg";

import {
  Descriptions,
  Skeleton,
  Image,
  Empty,
  Row,
  Col,
  Typography,
} from "antd";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";

const { Text } = Typography;

const EventDetail = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [remainingTime, setRemainingTime] = useState(null); // State to store remaining time

  useEffect(() => {
    const fetchDataAndConnect = async () => {
      try {
        const eventData = await getEventById(eventId);
        setEvent(eventData);
        setLoading(false);

        const EventController = await getEventRemainTime(eventId, (time) => {
          setRemainingTime(time);
        });

        return () => {
          EventController.disconnect();
        };
      } catch (error) {
        console.error("Error fetching event:", error);
        setLoading(false);
      }
    };

    fetchDataAndConnect();
  }, [eventId]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", margin: "24px 0" }}>
        <Skeleton active />
      </div>
    );
  }

  if (!event) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <Row justify="center" style={{ textAlign: "center", margin: "24px 0" }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <HeaderTitle title="Event Detail" />
        <Image
          src={logo}
          alt={event.name}
          //onError={handleImageError}
          style={{ width: "100%" }}
          fallback={logo}
          srcSet={event.src_image}
          loading="lazy"
        />
        <Descriptions
          size="small"
          layout="horizontal"
          contentStyle={{ color: "#888", fontWeight: "lighter" }}
          labelStyle={{ color: "#888", fontWeight: "bold" }}
        >
          <Descriptions.Item
            layout="horizontal"
            label={
              <span>
                <EnvironmentOutlined /> Location
              </span>
            }
          >
            <Text type="secondary">{event.location}</Text>
          </Descriptions.Item>
          <Descriptions.Item
            layout="horizontal"
            label={
              <span>
                <CalendarOutlined /> Date
              </span>
            }
          >
            <Text type="secondary">{new Date(event.date).toDateString()}</Text>
          </Descriptions.Item>
          <Descriptions.Item
            layout="horizontal"
            label={
              <span>
                <ThunderboltFilled /> Temperature
              </span>
            }
          >
            <Text type="secondary">{event.temperature} °C</Text>
          </Descriptions.Item>
          <Descriptions.Item
            layout="horizontal"
            label={<span>Description</span>}
          >
            <Text type="secondary" copyable>
              {event.description}
            </Text>
          </Descriptions.Item>
          <Descriptions.Item
            layout="horizontal"
            label={<span>Countdown</span>}
            style={{ textAlign: "center" }}
          >
            <Text type="secondary">{remainingTime}</Text>
          </Descriptions.Item>
        </Descriptions>
      </Col>

      <GoBackButton />
    </Row>
  );
};

export default EventDetail;
