import * as DialogRX from "@radix-ui/react-dialog";
import React, {PropsWithChildren, ReactElement} from "react";
import "./Dialog.scss";
import {closeIcon} from "../iconsList";

interface IDialogProps {
    triggerElement: ReactElement,
    title: string,
    isOpen: boolean,
    onOpenChange: (isOpen: boolean) => void,
}

export function Dialog({triggerElement, title, children, isOpen, onOpenChange}: PropsWithChildren<IDialogProps>) {
    return (
        <DialogRX.Root
            open={isOpen}
            onOpenChange={onOpenChange}
        >
            <DialogRX.Trigger asChild>
                {triggerElement}
            </DialogRX.Trigger>

            <DialogRX.Portal>
                <DialogRX.Overlay className="dialog-overlay" />
                <DialogRX.Content className="dialog-content">
                    <DialogRX.Title className="dialog-title">
                        {title}
                        <DialogRX.Close className="dialog-button-close">
                            {closeIcon}
                        </DialogRX.Close>
                    </DialogRX.Title>

                    <div className="dialog-inner-content">{children}</div>
                </DialogRX.Content>
            </DialogRX.Portal>
        </DialogRX.Root>
    );
}
