import React from 'react';
import Link from 'next/link';

function Card(props) {
  return (
    <>
      <div className="card">
        <Link href={`/video/${props.id}`}>
          <a className="content">
            <div className="thumbnail">{props.title[0]}</div>
            <div className="description">
              <p className="title">{props.title}</p>
              <p>{props.url}</p>
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .card {
          height: 96px;
          margin-bottom: 8px;
          border-radius: 4px;
          background: #ffffff;
          box-sizing: border-box;
          border: 1px solid #e6e6e6;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
        }

        .card .content {
          display: flex;
          text-decoration: none;
        }

        .thumbnail {
          color: #fff;
          width: 96px;
          height: 94px;
          display: flex;
          font-size: 48px;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          background: ${props.color};
          border-radius: 4px 0px 0px 4px;
        }

        p {
          margin: 0px;
          color: #000;
        }

        .title {
          font-size: 20px;
          font-weight: 700;
          margin-top: -12px;
          margin-bottom: 12px;
        }

        .description {
          padding: 16px;
          display: flex;
          box-sizing: border-box;
          flex-direction: column;
          justify-content: center;
          width: calc(100% - 96px);
        }

        .description p {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </>
  );
}

export default Card;
