// Routing.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store.js';
import App from '../App';
import { Home, YourChannel, History, Playlist, Like, CustomizeChannel, Signup, Login, Settings, Shorts, Video, UploadVideo, AllVideo, AuthLayout } from '../components';

function Routing() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                        <Route index element={<Home />} />

                        <Route path='your_channel/*' element={
                            <AuthLayout>
                                <YourChannel />
                            </AuthLayout>
                        }>
                            <Route  index element={
                                <AuthLayout>
                                    <AllVideo />
                                </AuthLayout>
                            } />
                            <Route path='upload_video' element={
                                <AuthLayout>
                                    <UploadVideo />
                                </AuthLayout>
                            } />
                        </Route>

                        <Route path='history' element={
                            <AuthLayout>
                                <History />
                            </AuthLayout>
                        } />
                        <Route path='playlist' element={
                            <AuthLayout>
                                <Playlist />
                            </AuthLayout>
                        } />
                        <Route path='like' element={
                            <AuthLayout>
                                <Like />
                            </AuthLayout>
                        } />
                        <Route path='subscriptions' element={
                            <AuthLayout>
                                <Home />
                            </AuthLayout>
                        } />
                        <Route path='shorts' element={
                            <AuthLayout>
                                <Shorts />
                            </AuthLayout>
                        } />
                        <Route path='watch' element={
                            <AuthLayout>
                                <Video />
                            </AuthLayout>
                        } />
                        <Route path='customize_channel' element={
                            <AuthLayout>
                                < CustomizeChannel />
                            </AuthLayout>
                        } />
                        <Route path='settings' element={
                            <AuthLayout>
                                < Settings />
                            </AuthLayout>
                        } />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default Routing;