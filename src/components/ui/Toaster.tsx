import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Info, ShieldAlert, X } from 'lucide-react';
import { useNotifications, AppNotification } from '../../contexts/NotificationContext';

const getIcon = (type: AppNotification['type']) => {
  switch (type) {
    case 'info':
      return <Info className="w-5 h-5 text-cyan-400" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
    case 'danger':
      return <ShieldAlert className="w-5 h-5 text-red-500" />;
    default:
      return <Info className="w-5 h-5 text-cyan-400" />;
  }
};

const getBorderColor = (type: AppNotification['type']) => {
  switch (type) {
    case 'info':
      return 'border-cyan-500/50';
    case 'warning':
      return 'border-yellow-500/50';
    case 'danger':
      return 'border-red-500/50';
    default:
      return 'border-slate-800';
  }
};

export function Toaster() {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 w-full max-w-sm pointer-events-none">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`pointer-events-auto bg-[#0a0b14] border ${getBorderColor(
              notification.type
            )} rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.5)] p-4 flex items-start gap-4 backdrop-blur-md relative overflow-hidden`}
          >
            {/* Subtle background glow based on severity */}
            <div
              className={`absolute -top-10 -left-10 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none ${
                notification.type === 'danger'
                  ? 'bg-red-500'
                  : notification.type === 'warning'
                  ? 'bg-yellow-500'
                  : 'bg-cyan-500'
              }`}
            />

            <div className="flex-shrink-0 mt-0.5">{getIcon(notification.type)}</div>
            
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-200 tracking-wide">
                  {notification.title}
                </h4>
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {notification.message}
              </p>
              <div className="text-[10px] uppercase tracking-widest text-slate-600 mt-2 font-mono">
                {notification.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
