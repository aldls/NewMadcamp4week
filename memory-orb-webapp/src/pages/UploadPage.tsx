import React, { useState } from 'react';
import axios from 'axios';

const UploadPage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (image) {
      // 이미지를 서버로 전송하는 로직 추가 예정
      const formData = new FormData();
      formData.append('file', image);

      try{
        const response = await axios.post('http://localhost:3000/upload', formData, {
            headers: { 
                'Content-Type': 'multipart/form-data'
            },
        });
        console.log(response.data);
      } catch(error){
        console.error('Error uploading file: ',error);
      }
    }
  };

  return (
    <div>
      <h1>기억 구슬 업로드</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>구슬 만들기</button>
      {image && <p>선택된 파일: {image.name}</p>}
    </div>
  );
};

export default UploadPage;
