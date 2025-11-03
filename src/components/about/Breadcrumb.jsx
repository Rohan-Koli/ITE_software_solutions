import React from 'react';

const Breadcrumb = ({ title, breadcrumbItems }) => {
  return (
    <section className="breadcrumb-section cmn-bg relative fix">
  <div className="container mx-auto px-4">
    <div className="bread-content px-3 flex flex-wrap gap-3 items-center justify-between md:justify-center">
      <h1 className="  !text-5xl md:!text-7xl !font-semibold">{title}</h1>

      <ul className="flex items-center gap-3">
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              <a
                href={item.href}
                className="fs-six black-clr fw-500 hover:text-blue-600 transition-colors"
              >
                {item.text}
              </a>
            </li>
            {index < breadcrumbItems.length - 1 && (
              <li>
                <i className="fa-solid fa-chevron-right p1-clr"></i>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  </div>
  {/* Bread Ele */}
  <img
    src="/assets/img/element/bread-shape.png"
    alt="img"
    className="bread-ele"
  />
</section>

  );
};

export default Breadcrumb;
