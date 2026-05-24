import { message } from 'antd'
import { MESSAGE_TYPE, type MessageType } from '@/constants/messages'

export const showMessage = (type: MessageType, text: string) => {
  switch (type) {
    // Usage: showMessage(MESSAGE_TYPE.SUCCESS, SUCCESS_MESSAGES.SAVED);
    case MESSAGE_TYPE.SUCCESS:
      message.success(text)
      break

    // Usage: showMessage(MESSAGE_TYPE.ERROR, ERROR_MESSAGES.REQUIRED);
    case MESSAGE_TYPE.ERROR:
      message.error(text)
      break

    // Usage: showMessage(MESSAGE_TYPE.WARNING, WARNING_MESSAGES.UNSAVED_CHANGES);
    case MESSAGE_TYPE.WARNING:
      message.warning(text)
      break

    // Usage: showMessage(MESSAGE_TYPE.INFO, INFO_MESSAGES.NO_DATA);
    case MESSAGE_TYPE.INFO:
      message.info(text)
      break
  }
}
