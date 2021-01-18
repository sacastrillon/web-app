
import {notification } from 'antd';

export function infoAlert(message: string): void {
    notification.info({
        message: message
    });
}

export function errorAlert(message: string): void {
    notification.error({
        message: message
    });
}

export function warningAlert(message: string): void {
    notification.warning({
        message: message
    });
}

export function successAlert(message: string): void {
    notification.success({
        message: message
    });
}