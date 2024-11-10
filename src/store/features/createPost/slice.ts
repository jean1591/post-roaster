import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum Objective {
  BoostEventAttendance = 'Boost Event Attendance',
  BuildBrandAwareness = 'Build Brand Awareness',
  CollectFeedback = 'Collect Feedback',
  DriveTraffic = 'Drive Traffic',
  EncourageDiscussion = 'Encourage Discussion',
  EnhanceCustomerLoyalty = 'Enhance Customer Loyalty',
  GenerateLeads = 'Generate Leads',
  IncreaseFollowers = 'Increase Followers',
  MaximizeEngagement = 'Maximize Engagement',
  ShowcaseExpertise = 'Showcase Expertise',
}

export enum Persona {
  Advocate = 'Advocate',
  Colleague = 'Colleague',
  Customer = 'Customer',
  EventAttendee = 'Event Attendee',
  Follower = 'Follower',
  HrProfessional = 'HR Professional',
  IndustryLeader = 'Industry Leader',
  IndustryPeer = 'Industry Peer',
  Influencer = 'Influencer',
  NetworkingContact = 'Networking Contact',
  PotentialCustomer = 'Potential Customer',
  ThoughtLeader = 'Thought Leader',
}

export enum Platform {
  Linkedin = 'Linkedin',
  Reddit = 'Reddit',
  Twitter = 'Twitter',
}

export interface createPostSlice {
  objective: string | null
  objectiveModalOpen: boolean
  persona: string | null
  personaModalOpen: boolean
  platform: Platform | null
  postContent: string
}

const initialState: createPostSlice = {
  objective: null,
  objectiveModalOpen: false,
  persona: null,
  personaModalOpen: false,
  platform: null,
  postContent: '',
}

export const createPostSlice = createSlice({
  name: 'createPostSlice',
  initialState,
  reducers: {
    resetCreatePost: (state) => {
      state.objective = null
      state.objectiveModalOpen = false
      state.persona = null
      state.personaModalOpen = false
      state.platform = null
      state.postContent = ''
    },
    setObjective: (state, action: PayloadAction<string>) => {
      state.objective = action.payload
    },
    setPersona: (state, action: PayloadAction<string>) => {
      state.persona = action.payload
    },
    setPlatform: (state, action: PayloadAction<Platform>) => {
      state.platform = action.payload
    },
    setPostContent: (state, action: PayloadAction<string>) => {
      state.postContent = action.payload
    },
    setObjectiveModal: (state, action: PayloadAction<boolean>) => {
      state.objectiveModalOpen = action.payload
    },
    setPersonaModal: (state, action: PayloadAction<boolean>) => {
      state.personaModalOpen = action.payload
    },
  },
})

export const {
  resetCreatePost,
  setObjective,
  setObjectiveModal,
  setPersona,
  setPersonaModal,
  setPlatform,
  setPostContent,
} = createPostSlice.actions

export default createPostSlice.reducer
