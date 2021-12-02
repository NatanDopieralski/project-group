import { AiOutlineRobot, AiOutlineUser } from 'react-icons/ai';
import { faPaperPlane, faSyncAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { TiMessages } from 'react-icons/ti';
import styles from './Chatbox.module.scss';

const Chatbox = () => {
  const {
    icon,
    root,
    header,
    btnOpenChatbox,
    btnCloseChatbox,
    form,
    body,
    overlay,
    logs,
    log,
    logQuestion,
    logAnswer,
    input,
    submit,
    messageBox,
    footer,
    dialogIcon,
  } = styles;

  const settings = {
    buttonMessage: 'Ask us a question',
    placeholderMessage: 'Type your question',
    messageboxClass: 'd-none',
    chooseTopic: 'Choose topic',
  };

  document.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.id === btnOpenChatbox) {
      handleOpen(event);
    } else if (
      event.target.closest(`#${btnCloseChatbox}`) ||
      !event.target.closest(`#${messageBox}`)
    ) {
      handleClose(event);
    }
  });

  const handleOpen = () => {
    document.getElementById(btnOpenChatbox).classList.add('d-none');
    document.getElementById(messageBox).classList.remove('d-none');
  };

  const handleClose = () => {
    const btnOpen = document.getElementById(btnOpenChatbox);
    const msgBox = document.getElementById(messageBox);

    if (msgBox) {
      msgBox.classList.add('d-none');
    }
    if (btnOpen) {
      btnOpen.classList.remove('d-none');
    }
  };

  return (
    <div className={root}>
      <div id={messageBox} className={settings.messageboxClass}>
        <div className={header}>
          <FontAwesomeIcon className={icon} icon={faSyncAlt} />
          <FontAwesomeIcon className={icon} id={btnCloseChatbox} icon={faTimes} />
        </div>
        <div className={body}>
          <div className={overlay}></div>
          <div className={logs}>
            <div className={logQuestion}>
              <AiOutlineUser className={dialogIcon} />
              <div className={log}>Test question</div>
            </div>

            <div className={`${logAnswer}`}>
              <AiOutlineRobot className={dialogIcon} />
              <div className={log}>Test answer</div>
            </div>
            <Button variant='innerChatbox'>{settings.chooseTopic}</Button>
          </div>
        </div>
        <form className={form}>
          <input
            type='text'
            className={input}
            placeholder={settings.placeholderMessage}
          />
          <button type='submit' className={submit} id={submit}>
            <FontAwesomeIcon icon={faPaperPlane} className={icon} />
          </button>
        </form>
        <div className={footer}>
          <TiMessages className={dialogIcon} />
        </div>
      </div>
      <Button id={btnOpenChatbox} className='' variant={'floating'}>
        {settings.buttonMessage}
      </Button>
    </div>
  );
};

export default Chatbox;
