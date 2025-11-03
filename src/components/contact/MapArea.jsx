import React from "react";

const MapArea = () => {
  return (
    <div className="space-bottom">
      <div className="map-area">
        <div className="container mx-auto px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1229776217124!2d73.83766837519358!3d18.520221370159424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfcd76d4142f%3A0xd14f8bbfbd92249e!2sMILO-%20CO%20WORK%20CAFE!5e0!3m2!1sen!2sin!4v1730626600000!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96 md:h-[500px] rounded-lg"
            title="Milo Co Work Cafe Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapArea;
