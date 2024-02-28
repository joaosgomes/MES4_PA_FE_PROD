import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  message,
  Skeleton,
  DatePicker,
  InputNumber,
  Row,
  Col,
} from "antd";
import { getEventById, updateEvent } from "../../controllers/EventController";
import { HeaderTitle, ImageSelect, GoBackButton } from "../index";
import moment from "moment";
import { fetchImages } from "../../controllers/ImageController";

export const EventEdit = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();
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

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(eventId);
        if (eventData) {
          setEvent(eventData);
          setSelectedImage(eventData.src_image);
          setLoading(false);

          // Parse the date to a moment object
          const formattedDate = moment(eventData.date);

          form.setFieldsValue({
            name: eventData.name,
            description: eventData.description,
            date: formattedDate.isValid() ? formattedDate : null,
            capacity: eventData.capacity,
            src_image: eventData.src_image,
            // Set other form fields here
          });
        }else
        {
            console.log("Error fetching event:", eventData);
            setLoading(false);
            navigate("/MES4_PA_FE_PROD");
            message.error('Error fetching event');
        }
      } catch (error) {
        console.error("Error fetching event:", error);
        setLoading(false);
        // Show error message and redirect back if event not found
        navigate("/MES4_PA_FE_PROD");
      }
    };

    fetchEvent();
  }, [eventId, form, navigate]); 

  async function handleUpdateEvent(values) {
    try {
      await updateEvent(eventId, values);
      message.success("Event updated successfully");
      navigate(`/MES4_PA_FE_PROD/event/${eventId}`);
    } catch (error) {
      console.error("Error updating event:", error);
      message.error("Failed to update event");
    }
  }

  if (loading) {
    return <Skeleton active />;
  }

  return (
    <div>
      <HeaderTitle title="Edit Event" />
      <Form
        form={form}
        onFinish={handleUpdateEvent}
        initialValues={{
          name: event?.name,
          description: event?.description,
          capacity: event?.capacity,
          src_image: event?.src_image,
        }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please enter the event name" },
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
                  message: "Please enter the event description",
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
              label="Capacity"
              name="capacity"
              rules={[
                { required: true, message: "Please input the event capacity!" },
              ]}
            >
              <InputNumber min={1} />
            </Form.Item>
          </Col>
        </Row>

        <ImageSelect
          imageList={imageList}
          setSelectedImage={setSelectedImage}
        />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Event
          </Button>
        </Form.Item>
        <Form.Item>
          <GoBackButton />
        </Form.Item>
      </Form>
    </div>
  );
};

export default EventEdit;
