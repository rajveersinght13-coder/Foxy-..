
// Fix: Import React to resolve the 'React' namespace for ReactNode types
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChoicePoint {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
