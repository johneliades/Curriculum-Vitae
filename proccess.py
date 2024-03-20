from moviepy.editor import VideoFileClip
import imageio
import os
import matplotlib.pyplot as plt

# This script creates the webm videos and the png images used in portfolio page

input_video_path = "test.mp4"
video_cut_range = (0, 36)
gif_cut_range = (5, 9)
frame_time = 28

# Variables to store cropping coordinates
crop_coordinates = None
click_coords = []


def generate_output_paths(input_video_path):
    base_name = os.path.splitext(os.path.basename(input_video_path))[0]
    output_video_path = f"{base_name}.webm"
    output_image_path = f"{base_name}.png"
    output_gif_path = f"{base_name}.gif"
    return output_video_path, output_image_path, output_gif_path


def convert_video_to_webm(input_path, output_path, crop_area=None):
    video_clip = VideoFileClip(input_path)

    if crop_area:
        x1, y1, x2, y2 = crop_area
        video_clip = video_clip.crop(x1, y1, x2, y2)

    # Cut the video to the specified range (in seconds)
    video_clip = video_clip.subclip(*video_cut_range)

    video_clip.write_videofile(output_path, codec="libvpx", bitrate="1000k")


def convert_video_to_gif(input_path, output_path, crop_area=None, frame_rate=33):
    video_clip = VideoFileClip(input_path)

    if crop_area:
        x1, y1, x2, y2 = crop_area
        video_clip = video_clip.crop(x1, y1, x2, y2)

    # Cut the video to the specified range (in seconds)
    video_clip = video_clip.subclip(*gif_cut_range)

    # Create a high-frame-rate GIF from the video
    video_clip.write_gif(output_path, fps=frame_rate, opt="nq")


def onmove(event):
    x, y = event.xdata, event.ydata
    if x is not None and y is not None:
        ax = plt.gca()
        ax.clear()
        ax.imshow(frame)

        if len(click_coords) == 0:
            line_color = "red"
        else:
            line_color = "green"

        ax.axvline(x, color=line_color, linestyle="--", linewidth=1)
        ax.axhline(y, color=line_color, linestyle="--", linewidth=1)

        plt.draw()


def onpress(event):
    global click_coords
    x, y = event.xdata, event.ydata
    click_coords.append((x, y))

    if len(click_coords) == 2:
        plt.close()


def display_frame_for_cropping(input_path, frame_time=0):
    global frame

    video_clip = VideoFileClip(input_path)
    frame = video_clip.get_frame(frame_time)

    fig = plt.figure()
    fig.canvas.manager.full_screen_toggle()

    ax = fig.add_subplot(111)
    ax.imshow(frame)

    fig.canvas.mpl_connect("motion_notify_event", onmove)
    fig.canvas.mpl_connect("button_press_event", onpress)
    plt.show()


def get_crop_coordinates(coords):
    if len(coords) == 2:
        x1, y1 = coords[0]
        x2, y2 = coords[1]
        return (min(x1, x2), min(y1, y2), max(x1, x2), max(y1, y2))
    else:
        return None


def extract_frame_from_video(input_path, output_path, frame_time, crop_area=None):
    # Load the video clip from the input path
    video_clip = VideoFileClip(input_path)

    if crop_area:
        x1, y1, x2, y2 = crop_area
        video_clip = video_clip.crop(x1, y1, x2, y2)

    # Get the frame at the specified time (in seconds)
    frame = video_clip.get_frame(frame_time)

    # Save the frame as an image using imageio
    imageio.imwrite(output_path, frame)


if __name__ == "__main__":
    output_video_path, output_image_path, output_gif_path = generate_output_paths(
        input_video_path
    )

    # Display the 5th second of the video for cropping
    display_frame_for_cropping(input_video_path, frame_time)

    # Wait for the user to select a cropping area
    while len(click_coords) < 2:
        plt.pause(0.1)

    # Get the cropping coordinates
    crop_coordinates = get_crop_coordinates(click_coords)

    extract_frame_from_video(
        input_video_path, output_image_path, frame_time, crop_coordinates
    )

    convert_video_to_webm(input_video_path, output_video_path, crop_coordinates)

    # convert_video_to_gif(input_video_path, output_gif_path, crop_coordinates)
