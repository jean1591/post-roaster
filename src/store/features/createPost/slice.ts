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
  Twitter = 'Twitter',
}

// TODO: export this as is, not within slice
const steps = ['Text', 'Platform', 'Persona', 'Objective']

export interface createPostSlice {
  objective: Objective | null
  persona: Persona | null
  platform: Platform | null
  postContent: string
  step: number
  steps: typeof steps
}

const initialState: createPostSlice = {
  objective: null,
  persona: null,
  platform: null,
  postContent: '',
  step: 0,
  steps,
}

export const createPostSlice = createSlice({
  name: 'createPostSlice',
  initialState,
  reducers: {
    resetCreatePost: (state) => {
      state.objective = null
      state.persona = null
      state.platform = null
      state.step = 0
      state.postContent = ''
    },
    setObjective: (state, action: PayloadAction<Objective>) => {
      state.objective = action.payload
    },
    setPersona: (state, action: PayloadAction<Persona>) => {
      state.persona = action.payload
    },
    setPlatform: (state, action: PayloadAction<Platform>) => {
      state.platform = action.payload
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    setPostContent: (state, action: PayloadAction<string>) => {
      state.postContent = action.payload
    },
  },
})

export const {
  resetCreatePost,
  setObjective,
  setPersona,
  setPlatform,
  setStep,
  setPostContent,
} = createPostSlice.actions

export default createPostSlice.reducer
