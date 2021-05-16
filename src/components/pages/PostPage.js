import React from 'react';
import { Container } from 'react-bootstrap';
import EditComment from '../EditComment';
import './PostPage.css';

function PostPage() {

    return (
        <>
            <h1 className="games">Featured Posts</h1>
            <Container className="chatBox">
                <EditComment/>
            </Container>
        </>
    );
}

export default PostPage;