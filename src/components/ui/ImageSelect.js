import React from "react";
import { Form, Col, Select, Empty } from "antd";

const { Option } = Select;

const renderOption = (image) => (
  <Option key={image.id} value={image.src_image} label={image.id}>
    <img
      src={image.src_image}
      alt={image.alt}
      style={{ width: 50, marginRight: 10 }}
    />
    {image.id}
  </Option>
);

const ImageSelect = ({ imageList, setSelectedImage }) => {
  const handleImageSelect = (value) => {
    setSelectedImage(value); // Update the selected image state
  };

  return imageList && imageList.length > 0 ? (
    <Col xs={24} sm={12}>
      <Form.Item
        label="Image"
        name="src_image"
        rules={[{ required: true, message: "Please select an image!" }]}
      >
        <Select
          style={{ width: "100%" }}
          placeholder="Select an image"
          optionLabelProp="label"
          onChange={handleImageSelect}
          showSearch
          filterOption={(input, option) =>
            option.children
              ? option.children
                  .toString()
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              : false
          }
        >
          {imageList && imageList.map((image) => renderOption(image))}
        </Select>
      </Form.Item>
    </Col>
  ) : (
    <Empty
      description="No images available"
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
  );
};

export default ImageSelect;
