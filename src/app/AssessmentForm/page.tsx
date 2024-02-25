'use client'

import { useState } from 'react'
import AssessmentForm1 from './AssessmentForm1/page'
import ProtectedRoute from '../_components/ProtectedRoute';
export default function page() {
    return (
        <>
            <ProtectedRoute>
                <AssessmentForm1 />
            </ProtectedRoute>
        </>
    )
}