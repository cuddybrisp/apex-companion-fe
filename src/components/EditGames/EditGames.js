
// <Modal show={show} onHide={handleClose}>
//         <Modal.Header className="edit-header" closeButton>
//           <Modal.Title></Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="edit-body">
//           <form id="create-post-form" onSubmit={handleSubmit}>
//             <div className="tweet-input">
//               <input
//                 id="tweetField"
//                 placeholder="What's the tea?"
//                 type="text"
//                 name="content"
//                 value={post.content}
//                 onChange={handleChange} />
//             </div>
//             <button
//               onClick={() => {
//                 handleClose()
//                 refreshFeed()
//               }
//               }
//               className="tweet-btn"
//               type="submit">Serve</button>
//           </form>
//         </Modal.Body>
//         <Modal.Footer className="edit-footer">
//         </Modal.Footer>
//       </Modal>
