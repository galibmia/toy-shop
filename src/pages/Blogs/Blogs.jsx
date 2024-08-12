import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='mt-28'>
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-6">Blogs</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>
                        An <strong>access token</strong> is a credential that is used to access protected resources on behalf of a user or application. It is typically short-lived and contains information about the user or application as well as the permissions granted.
                    </p>
                    <p>
                        A <strong>refresh token</strong> is a credential that is used to obtain a new access token when the current access token expires. It is typically long-lived and allows the client to remain authenticated without requiring the user to re-enter credentials.
                    </p>
                    <p>
                        <strong>How they work:</strong>
                    </p>
                    <ul className="list-disc ml-6">
                        <li>When a user logs in, they receive both an access token and a refresh token.</li>
                        <li>The access token is used to make authenticated requests to the server.</li>
                        <li>When the access token expires, the client uses the refresh token to request a new access token from the server.</li>
                        <li>If the refresh token is still valid, the server issues a new access token; otherwise, the user must re-authenticate.</li>
                    </ul>
                    <p>
                        <strong>Storage on the client-side:</strong> Access tokens should be stored in memory or in a secure storage mechanism such as <code>localStorage</code> or <code>sessionStorage</code>. Refresh tokens should be stored in a more secure manner, such as HTTP-only cookies, to protect against XSS attacks.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. Compare SQL and NoSQL databases?</h2>
                    <p>
                        <strong>SQL Databases:</strong>
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Relational database management systems (RDBMS) like MySQL, PostgreSQL, and Oracle.</li>
                        <li>Structured query language (SQL) is used for defining and manipulating data.</li>
                        <li>Data is stored in tables with predefined schemas (rows and columns).</li>
                        <li>Supports ACID properties (Atomicity, Consistency, Isolation, Durability) for reliable transactions.</li>
                        <li>Suitable for complex queries and transactions involving multiple tables.</li>
                    </ul>
                    <p>
                        <strong>NoSQL Databases:</strong>
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Non-relational databases like MongoDB, Cassandra, and Redis.</li>
                        <li>Data can be stored in various formats such as key-value pairs, documents, columns, or graphs.</li>
                        <li>Schemas are flexible, allowing for dynamic and unstructured data.</li>
                        <li>Designed for horizontal scalability and high performance.</li>
                        <li>Suitable for handling large volumes of unstructured or semi-structured data.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. What is Express.js? What is NestJS?</h2>
                    <p>
                        <strong>Express.js:</strong>
                    </p>
                    <p>
                        Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It is known for its simplicity, speed, and performance. Express.js makes it easy to create RESTful APIs and web applications by providing various HTTP utility methods and middleware.
                    </p>
                    <p>
                        <strong>NestJS:</strong>
                    </p>
                    <p>
                        NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with TypeScript and uses modern JavaScript, combining elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). NestJS is heavily inspired by Angular, providing an out-of-the-box application architecture that allows for the effortless creation of highly testable, scalable, loosely coupled, and easily maintainable applications.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. What is MongoDB aggregate and how does it work?</h2>
                    <p>
                        MongoDB's <strong>aggregate</strong> is a powerful framework for data aggregation that allows you to perform complex data processing and transformation on the server side. It operates on collections of documents and processes them through a series of stages, where each stage transforms the documents as they pass through the pipeline.
                    </p>
                    <p>
                        <strong>How it works:</strong>
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Documents enter the pipeline from a collection.</li>
                        <li>Each stage performs an operation on the documents, such as filtering, grouping, sorting, or reshaping.</li>
                        <li>The output of one stage is passed to the next stage.</li>
                        <li>The final stage outputs the transformed documents.</li>
                    </ul>
                    <p>
                        Common stages in an aggregation pipeline include:
                    </p>
                    <ul className="list-disc ml-6">
                        <li><strong>$match:</strong> Filters documents based on a specified condition.</li>
                        <li><strong>$group:</strong> Groups documents by a specified key and performs aggregations on grouped data.</li>
                        <li><strong>$project:</strong> Reshapes each document by including, excluding, or adding fields.</li>
                        <li><strong>$sort:</strong> Sorts documents based on a specified field.</li>
                        <li><strong>$limit:</strong> Limits the number of documents passed to the next stage.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
