import { useEffect } from "react";

    const backendData = [
        {
            "id": 1,
            "noteType": "Personal",
            "title": "Buy groceries",
            "content": "Pick up milk, bread, and eggs from the store.",
            "isFavorite": true,
            "updatedAt": "2026-10-03T18:00:00",
            "deleteIcon": true
        },
        {
            "id": 2,
            "noteType": "Work",
            "title": "Project Meeting Notes",
            "content": "Discussed sprint backlog, assigned tasks, and reviewed deadlines.",
            "isFavorite": false,
            "updatedAt": "2026-10-02T14:30:00",
            "deleteIcon": true
        },
        {
            "id": 3,
            "noteType": "Ideas",
            "title": "App Concept",
            "content": "Brainstorming a photo storage app with React and Express backend.",
            "isFavorite": true,
            "updatedAt": "2026-10-01T09:15:00",
            "deleteIcon": true
        }
    ]

    export default backendData;