import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Col,
  Row,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { addNewEvent } from "../../controllers/EventController";
import { GoBackButton, HeaderTitle, ImageSelect } from "../index";
import { fetchImages } from "../../controllers/ImageController";

const EventForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImageOptions();
  }, []);

  const fetchImageOptions = async () => {
    try {
      const images = await fetchImages();
      setImageList(images);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      values.src_image = selectedImage;
      const newEvent = await addNewEvent(values);
      console.log("New event added:", newEvent);
      message.success("Event created successfully!");
      navigate("/MES4_PA_FE_PROD");
    } catch (error) {
      console.error("Error adding event:", error);
      message.error("Failed to create event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <HeaderTitle title="New Event" />
      <Form
        name="event_form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{ remember: true }}
        layout="horizontal"
      >
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Event Name"
              name="name"
              rules={[
                { required: true, message: "Please input the event name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input the event description!",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Date"
              name="date"
              rules={[
                { required: true, message: "Please select the event date!" },
              ]}
            >
              <DatePicker format="YYYY-MM-DD HH:mm:ss" showTime />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Location"
              name="location"
              rules={[
                { required: true, message: "Please input the event location!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Capacity"
              name="capacity"
              rules={[
                { required: true, message: "Please input the event capacity!" },
              ]}
            >
              <InputNumber min={1} />
            </Form.Item>
          </Col>
          {imageList ? (
            <ImageSelect
              imageList={imageList}
              setSelectedImage={setSelectedImage}
            />
          ) : null}
        </Row>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <GoBackButton />
        </Form.Item>
      </Form>
    </>
  );
};

export default EventForm;
